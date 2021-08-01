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
  selector: 'app-college-details',
  templateUrl: './college-details.page.html',
  styleUrls: ['./college-details.page.scss'],
})
export class CollegeDetailsPage implements OnInit {
	@ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  
  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
   state_list:any;
  data_college:any;
  image_path=image_path;
  course_list:any;
  all_data:any;
  state:any='';
  course:any='';
  slug:any;
  news_facultyval:any='news';
  news:any;
  faculty:any;
  photo_mapval:any='photo';
  embedurl:any;
  current_year:any;
  tab_val:any='info';
  all_img:any;


  constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   public route: ActivatedRoute,
  public  sanitizer: DomSanitizer


   ) {
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
     
    };
  
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }


  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
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
  	 this.getCollege();
  }
 async getCollege(){
     const loading = await this.loadingController.create({
    message: ''
  });
    let data={
    
    "user_id": '',
       
  }
    await loading.present();
   this.http.get(host+'college-details/'+this.slug)
  .subscribe((res:any) => {
  	this.current_year = new Date().getFullYear()
// output 2020
    
    res = res.json();
    //console.log(res);
   
       //this.all_data=res;
       this.data_college=res.college;
       this.all_img=res.all_images;
       this.embedurl =this.sanitizer.bypassSecurityTrustHtml(this.data_college.map);
   		this.course=res.all_courses;
       this.news=res.news;
       this.faculty=res.faculties;
        loading.dismiss();
   
   

  }, (err) => {
    //console.log(err);
     loading.dismiss();
  });
  }
news_faculty(val){
this.news_facultyval=val;
}
photo_map(val){
this.photo_mapval=val;
}
college_tab(val){
this.tab_val=val;
}
goto_form(state,college){
this.navCtrl.navigateForward('/apply-form?state_id='+state+'&college_id='+college);
}

}
