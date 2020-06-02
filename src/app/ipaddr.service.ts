import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpaddrService {
  
  public ip_addr: string = 'http://1.10.184.234:8159/';
  public ip_addr2: string = 'http://1.10.184.234:8167/cust_ws2.php?service_id=';
  public ip_addr3: string = 'http://10.255.254.182:3002/api/customer/'; /// for nodeJS  Internal TOT Intra
  public ip_addr4: string = 'http://118.173.56.35:8182/api/customer/'; /// for nodeJS  External TOT Intra

  constructor() { }
  public use_ip() {
    return this.ip_addr;
  }

  public use_ip2() {
    return this.ip_addr2;
  }

  public use_ip3() {
    return this.ip_addr3;
  }

  public use_ip4() {
    return this.ip_addr4;
  }
  
}
