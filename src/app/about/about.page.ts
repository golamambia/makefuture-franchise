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
declare var window: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  page:any;
 data_about: any;
 image_path=image_path;
 courses:any;
 states:any;
 partner:any='';
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


   )  { }

  ngOnInit() {
  	  
  }


 ionViewWillEnter(){
     this.getData();
  }
 async getData(){
     const loading = await this.loadingController.create({
    message: ''
  });
   
    await loading.present();
   this.http.get(host+'about')
  .subscribe((res:any) => {
   
    res = res.json();
//console.log(res);
   
       this.data_about=res.data;
       this.partner=res.partners;
       if(res.partners){

   setTimeout(()=>{
      this.loadSlider();
   },300)
  
 }
       
        loading.dismiss();
   
   

  }, (err) => {
    //console.log(err);
     loading.dismiss();
  });
  }

  loadSlider(){
  	  var slide = window.jQuery('.ourpartners-carousel');
  
    slide.owlCarousel({
    loop:false,
    autoplay:true,
    margin:10,
    dots:true,
    nav:false,
    navText:[],
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:3
      },
      480:{
        items:3
      },
      992:{
        items:3
      },
      1199:{
        items:3
      }
    }
  });
	}


}
