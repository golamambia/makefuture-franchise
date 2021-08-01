import { Component, OnInit,ViewChild  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.page.html',
  styleUrls: ['./our-service.page.scss'],
})
export class OurServicePage implements OnInit {
  page:any;
 data_service: any;
 image_path=image_path;
 courses:any;
 states:any;
 state:any='';
 course:any='';
 email:any;
 phone:any;
 fname:any;
 lame:any;
 subject:any;
 message:any;

   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
  public  sanitizer: DomSanitizer


   )  {
 
   }

  ngOnInit() {
  }
   onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
 ionViewWillEnter(){
     this.getData();
  }
 async getData(){
     const loading = await this.loadingController.create({
    message: ''
  });
   
    await loading.present();
   this.http.get(host+'service-details')
  .subscribe((res:any) => {
   
    res = res.json();
   // console.log(res);
   
       this.data_service=res.service_details;
       this.courses=res.courses;
       this.states=res.states;
       
        loading.dismiss();
   
   

  }, (err) => {
    //console.log(err);
     loading.dismiss();
  });
  }
   async submit(){
const loading = await this.loadingController.create({
    message: 'Sending...'
  });
  
    const passalrt = await this.alertController.create({
     message: 'Please enter password',
      buttons: ['OK']
    });


 
var headers = new Headers();
  if(this.fname == '' || this.fname == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter first name',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.lame == '' || this.lame == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter last name',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.email == '' || this.email == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }
  else if(this.phone == '' || this.phone == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.subject == '' || this.subject == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter subject',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.state == '' || this.state == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please choose state',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.course == '' || this.course == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please choose course',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else if(this.message == '' || this.message == null){
     
    loading.dismiss();
    this.alertController.create({
     message: 'Please enter message',
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
  }else{
   await loading.present();
  var data ={
    "fname": this.fname,
    "lame": this.lame,
    "email": this.email,
    "phone": this.phone,
    "subject": this.subject,
    "state": this.state,
    "course": this.course,
    "message": this.message,
   
  }

  this.http.post(host+'enquiry', data)
  .subscribe((res:any) => {
    //console.log(res.json());
    res = res.json();
    if(res.status == false){
    loading.dismiss();
    this.alertController.create({
      
      message: res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
    }else if(res.status == true){
       this.fname='';
    this.lame='';
   this.email='';
   this.phone='';
    this.subject='';
    this.state='';
    this.course='';
    this.message='';
   this.alertController.create({
      
      message: res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    loading.dismiss();
    }else{
    this.alertController.create({
     message: 'Something went wrong',
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
