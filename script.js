let messageCount = $(".trash").length;
$("#count").text(messageCount);

$("body").on(
    "click", 
    '.trash',
    function() {
        $(this).parent().remove();
        let messageCount = $(".trash").length;
        $("#count").text(messageCount);
    }
)

$("#btn-add").click(
    function(){
        const messageInput = $("#add-message").val();
        $('body').append(
        `<div class="row last-row">
            <img class="avatar" src="avatar-4.jpg">
            <div>
                <h6>Eric Dupont</h6>
                <p>${messageInput}</p>
            </div>
            <img class="trash" src="trash.png">
        </div>`
        )
        $("#add-message").val("");
        let messageCount = $(".trash").length;
        $("#count").text(messageCount);
    }
)

$("#btn-search").click(
    function(){
        let searchInput = $("#search-message").val().toLowerCase();
        $("h6").each(
            function(){
                if ($(this).text().toLowerCase().includes(searchInput) === false) {
                    $(this).parent().parent().fadeOut(600);
                } else {
                    $(this).parent().parent().fadeIn(600);
                }
            }
        )
        $("#search-message").val("");
    }
)