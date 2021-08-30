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
  selector: 'app-apply-authorization',
  templateUrl: './apply-authorization.page.html',
  styleUrls: ['./apply-authorization.page.scss'],
})
export class ApplyAuthorizationPage implements OnInit {
userData: any;
userDetails: any;
image_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
res: any;
 address: any;
 aadhaar_number:any;
  userId: any;
  admission_list:any;
  payment_status:any;
  pt_status:any;
  list:any;
  state:any='';
  st_list:any;
  coll_list:any;
  college:any='';
  authorization_status_array:any;

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
   this.listitem();
}

  ngOnInit() {
  }
 async listitem(){
 const loading = await this.loadingController.create({
    message: ''
  });
        var headers = new Headers();
       
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userId,
       
  }
 await loading.present();
   this.http.get(host+'get-applyAuthorization?user_id='+this.userId)
	.subscribe(res => {
		
		this.res = res.json();
		console.log(this.res);
		 if(this.res.status){
		 	loading.dismiss();
	
  this.list=this.res.response_data.lists;
  this.st_list=this.res.response_data.states;
  this.authorization_status_array=this.res.response_data.authorization_status_array;

		}else{
		alert("Server error");
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		loading.dismiss();
	});
      
    
  }
  getCollege(id){
 // console.log(id);
  var data ={
    "id": id,
   
  }
           
  this.http.get(host+'get-college?state_id='+id)
  .subscribe(res => {
    
    this.res = res.json();
    console.log(this.res);
     if(this.res.status){

 this.coll_list =this.res.response_data.colleges;
   //this.loading.hide();
     
    }else{
    alert("Server error");
    //this.loading.hide();
    
    }
  }, (err) => {
    //this.loading.hide();
    console.log(err);
    
  });
}
 async submit(){
 const loading = await this.loadingController.create({
    message: ''
  });
   const msgalrt = await this.alertController.create({
     message: 'Please select state',
      buttons: ['OK']
    });
        var headers = new Headers();
       
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userId,
    "state_id": this.state,
    "college_id":this.college
       
  }
  if(this.state == '' || this.state == null){
		 
		loading.dismiss();
		msgalrt.present();
	}else if(this.college == '' || this.college == null){
		 
		loading.dismiss();
		this.alertController.create({
      
      message: 'Please select college',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
	}else{
 await loading.present();
   this.http.post(host+'post-authorization',data)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){
		 	this.state='';
		 	this.college='';
		 	loading.dismiss();
		this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
			
		}else{
		this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		loading.dismiss();
	});
      
    }
  }

}
