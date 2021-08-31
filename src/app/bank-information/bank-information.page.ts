import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';

@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.page.html',
  styleUrls: ['./bank-information.page.scss'],
})
export class BankInformationPage implements OnInit {
userData: any;
userDetails: any;
imag_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
res: any;
 address: any;
 aadhaar_number:any;
 userId: any;
 account_number: any;
 bank_ifsc: any;
 bank_address: any;
 bank_holder_name: any;
    constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location

   ) {


this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
        
        var headers = new Headers();
       this.userId=this.userDetails.response_data.id;
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userDetails.response_data.id,
       
  }
 
   this.http.get(host+'get-bankinfo?user_id='+this.userDetails.response_data.id)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){

		this.account_number =this.res.response_data.account_number;
		this.bank_address =this.res.response_data.bank_address;
		this.bank_holder_name =this.res.response_data.bank_holder_name;
		this.bank_ifsc =this.res.response_data.bank_ifsc;			
		
		}else{
		alert("Server error");
		//loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		//loading.dismiss();
	});
      }
    });


   }
  ngOnInit() {
  }
  async updateProfile(){
  const loading = await this.loadingController.create({
    message: 'Updating...'
  });

   
    const erroralrt = await this.alertController.create({
     message: 'Sorry,something went wrong',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'Account update successful',
      buttons: ['OK']
    });

    var headers = new Headers();
    //headers.append("Accept", 'application/json');
	
   if(this.bank_holder_name == '' || this.bank_holder_name== null){
  loading.dismiss();
 this.alertController.create({
     message: 'Please enter bank holder name',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
  }else if(this.bank_address == '' || this.bank_address== null){
  loading.dismiss();
 this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
  }else if(this.bank_ifsc == '' || this.bank_ifsc== null){
  loading.dismiss();
 this.alertController.create({
     message: 'Please enter bank ifsc',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
  }else if(this.account_number == '' || this.account_number== null){
  loading.dismiss();
 this.alertController.create({
     message: 'Please enter account number',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
  }else{
	await loading.present();


	let data = new FormData();
	data.append('bank_holder_name', this.bank_holder_name);
	data.append('id', this.userId);
	data.append('bank_address', this.bank_address);
 	data.append('bank_ifsc', this.bank_ifsc);
 	data.append('account_number', this.account_number);

	this.http.post(host+'post-bankinfo', data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
    //console.log(this.res.response_data.aadhaar_number[0]);
		if(this.res.status == false){
		loading.dismiss();
	
			this.alertController.create({
     message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		
		
		}else if(this.res.status){
	
			this.alertController.create({
     message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		loading.dismiss();
	});

	}


  }
onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

}
