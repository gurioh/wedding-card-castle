// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $('#guest_book_btn').click(function() {
        console.log("Click!!!")
       
        fetch("./guest_book.json")
        .then(response => {
            return response.json();
        })
        .then(json => {

            var adapter = new LocalStorage('db')
            var db = low(adapter)
            db.defaults({ guests: []}).write()
            let a = [1,2,3,4];
            let b = _.shuffle(a);

            console.log(b); // [4,3,1,2]
            data = json.list;

            newObj = JSON.stringify(initGuestBook());
            data.push(JSON.parse(newObj))
            
            let html = '';

            data.forEach(element => {
                html += `<li> ${element.author} </li>`
            });


            $('#guest_list').html(html)
            $('#exampleModal').modal('hide');

        });
    });
})


function initGuestBook(){

    let guestName = $('#guest_name').val()
    let guestPassword = $('#guest_password').val()
    let guestContents = $('#guest_contents').val()

    return {
        'author' : guestName,
        'guestPassword' : guestPassword,
        'guestContents' : guestContents,
    }
}


