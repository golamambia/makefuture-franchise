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
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
	image_path=image_path;
	news_data:any;
	type:any='';
	slug:any;
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
  public  sanitizer: DomSanitizer


   ) { }

     ngOnInit() {
   // console.log(host);
  	  this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.slug=params['slug'];
    //console.log(this.slug);
  }
});
  }
   ionViewWillEnter(){
  	 this.getCourse();
  }

 async getCourse(type=null){
     const loading = await this.loadingController.create({
    message: ''
  });
    let data={
    
    "user_id": '',
       
  }
    await loading.present();
    
   this.http.get(host+'news/'+this.slug)
  .subscribe((res:any) => {
    
    res = res.json();
    //console.log(res);
   
       //this.all_data=res;
       this.news_data=res;

      
        loading.dismiss();
   
   

  }, (err) => {
    //console.log(err);
     loading.dismiss();
  });
  }

}
