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
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {
userData: any;
userDetails: any;
imag_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
res: any;
 address: any;
 aadhaar_number:any;
  userId: any;
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
 
   this.http.get(host+'get-myaddress?user_id='+this.userDetails.response_data.id)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){

		this.address =this.res.response_data.address;
		this.aadhaar_number =this.res.response_data.aadhaar_number;		
		
		}else{
		alert("Server error");
		//loading.dismiss();
		}
	}, (err) => {
		console.log(err);
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

    const aadharalrt = await this.alertController.create({
     message: 'Please enter aadhaar no',
      buttons: ['OK']
    });
const addressalrt = await this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
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
	 // if(this.aadhaar_number == '' || this.aadhaar_number == null){
     
  //   loading.dismiss();
  //   aadharalrt.present();
  // }else
   if(this.address != this.address){
  loading.dismiss();
  addressalrt.present();
    
  }else{
	await loading.present();


	let data = new FormData();
	data.append('aadhaar_number', this.aadhaar_number);
	data.append('id', this.userId);
	data.append('address', this.address);
 

	this.http.post(host+'update-address', data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
    //console.log(this.res.response_data.aadhaar_number[0]);
		if(this.res.status == false){
		loading.dismiss();
		if(this.res.response_data.aadhaar_number[0]){
			this.alertController.create({
     message: this.res.response_data.aadhaar_number[0],
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		}else{
			erroralrt.present();
		}
		
		}else if(this.res.status){
		//this.htmlYouWantToAdd = this.f_name +' '+this.l_name;
    //this.user_img=this.res.response_data.avatar;
    //this.imgget='';
		//this.navCtrl.navigateForward('login');
		successalrt.present();
		loading.dismiss();
		}else{
		//alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});

	}


  }
onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
}
