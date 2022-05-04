import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.sass']
})
export class XssComponent implements OnInit {

    myPhoto: string = "https://lh3.googleusercontent.com/mCvbPV-2xikSUmJXyrh440GPG1mXoaXKFJcnEeeOH3PAmO8m4RHUcNOXLVeVonGbGpHA2dx_qmgFUrf2OJj4S01flHkWJRnG-k8XTxsrJ-13FWAR--U=w800-rw-e365-v1"
    imgSrcBad1: string = "javascript:alert('test')"
    imgSrcBad2: string = '#" onerror=alert(1) "'
    imgSrcBad3: string = '""><SCRIPT>alert("XSS")</SCRIPT>'
    imgSrcBad4: string = "jav ascript:alert('XSS');"
    imgSrcBad5: string = "jav&#x09;ascript:alert('XSS');"

    myBG: string = "url(" + "https://lh3.googleusercontent.com/mCvbPV-2xikSUmJXyrh440GPG1mXoaXKFJcnEeeOH3PAmO8m4RHUcNOXLVeVonGbGpHA2dx_qmgFUrf2OJj4S01flHkWJRnG-k8XTxsrJ-13FWAR--U=w800-rw-e365-v1" + ")"
    bgImg1: string = "url(" + "javascript:alert(2)" + ")"
    bgImg2: string = "url(" + 'https://lh3.googleusercontent.com/mCvbPV-2xikSUmJXyrh440GPG1mXoaXKFJcnEeeOH3PAmO8m4RHUcNOXLVeVonGbGpHA2dx_qmgFUrf2OJj4S01flHkWJRnG-k8XTxsrJ-13FWAR--U=w800-rw-e365-v1")' + "<script>alert(5)</script>"
    bgImg3: string = 'url(https://uploads-ssl.webflow.com/5b2472a9a3234f41a9a9380f/5b4be102d9554316301c4c7b_ByrdsEye.png)"><script>alert(5)</script>'
    bgImg4: string = "url(https://uploads-ssl.webflow.com/5b2472a9a3234f41a9a9380f/5b4be102d9554316301c4c7b_ByrdsEye.png)'"


    myURL: string = "https://www.android.com/";
    badURL1: string = "javascript:alert(8007)";
    badURL2: string = '" onclick=alert(8007)';


    constructor() { }

    ngOnInit(): void {
    }

}
