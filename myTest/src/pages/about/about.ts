import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage
{
  constructor(private qrScanner: QRScanner)
  {
  }

  scan()
  {
    console.log('Clicked');

    this.qrScanner.prepare().then((status: QRScannerStatus) =>
    {

      console.log('Status authorized: '+status.authorized);

      if(status.authorized)
      {
        let scansub = this.qrScanner.scan().subscribe((text: string) =>
        {
          this.qrScanner.hide();
          scansub.unsubscribe();
        });
      }
      else if (status.denied)
      {
      }
      else
      {
      }
    });
  }

}
