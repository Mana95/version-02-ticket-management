export class  TicketHelper {


    static systemIdGenratr(type){
            var genId = ''
            var chars = "ABCDEFGHIJKLMNOPQRSTUFWXYZ1234567890";
            var string_length = 8;
            var id = type+"_" + "";
            for (var i = 0; i < string_length; i++) {
              var rnum = Math.floor(Math.random() * chars.length);
              id += chars.substring(rnum, rnum + 1);
            }
            genId = id;
            return genId;
    }


      static formatMoney(number , currency = 'LKR') {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'LKR' });
      }




}
