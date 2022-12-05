function render(data) {
    var html="<div class='commentBox'><div class='leftPanelImg'><img src='https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
    $('#container').append(html);
}

$(document).ready(function() {

    var comment = [
        {"name": "Howard University CEA", "date": "Dec 04, 2022", "body": "Please leave a comment regarding your current and/or past career experiences and opportunities to share with others!"}
    ];

    for(var i=0; i<comment.length; i++){
        render(comment[i]);
    }

    $('addComment').click(function(){
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val(),
        };
        comment.push(addObj);
        $('#name').val('');
        $('#date').val('mm/dd/yyyy');
        $('#bodyText').val('');
    });
});