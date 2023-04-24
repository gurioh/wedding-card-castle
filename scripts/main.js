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
            console.log(JSON.stringify(response))
        return response.json();
        })
        .then(jsondata => console.log(jsondata));

        const data = initGuestBook()

        console.log(JSON.stringify(data))

    });
})


function initGuestBook(){

    let guestName = $('#guest_name').val()
    let guestPassword = $('#guest_password').val()
    let guestContents = $('#guest_contents').val()

    return {
        'guestName' : guestName,
        'guestPassword' : guestPassword,
        'guestContents' : guestContents,
    }
}


