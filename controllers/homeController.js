
    /*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    import { getAnnouncements } from "../models/announcementModel.js";
    import { getServices } from "../models/serviceModel.js";

    export const homePage = (req, res) => {
      const announcements = getAnnouncements();
      const services = getServices();
      const contact = {
        phone: "(043) 123-4567",
        email: "accounting@bongabong.gov.ph",
        addressLines: ["Municipal Hall Building, Poblacion", "Bongabong, Oriental Mindoro 5211"],
        hours: "Monday to Friday: 8:00 AM - 5:00 PM"
      };

      res.render("home", {
        title: "Municipal Accounting Office - Bongabong",
        announcements,
        services,
        contact
      });
    };
