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
  selector: 'app-my-offer',
  templateUrl: './my-offer.page.html',
  styleUrls: ['./my-offer.page.scss'],
})
export class MyOfferPage implements OnInit {
userData: any;
userDetails: any;
imag_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
res: any;
 address: any;
 aadhaar_number:any;
  userId: any;
  admission_list:any;
  payment_status:any;
  pt_status:any;
  myoffer:any;
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
        this.userId=this.userDetails.response_data.id;
        }
        });

    }
   ionViewWillEnter() {
   this.getOffer();
}

  ngOnInit() {
  }
 async getOffer(){
 const loading = await this.loadingController.create({
    message: ''
  });
        var headers = new Headers();
       
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userId,
       
  }
 await loading.present();
   this.http.get(host+'get-myoffer?user_id='+this.userId)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){
		 	loading.dismiss();
		 	
		this.myoffer =this.res.response_data.data;
		//console.log(this.pt_status);
			
		}else{
		alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		loading.dismiss();
	});
      
    
  }
}
