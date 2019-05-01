
$(function () {

    $("#sam-create").on("click", function (event) {
        event.preventDefault();

        let newSam = {
            name: $("#sam").val().trim(),
            // devoured: false
        };

        $.ajax("/api/sammiches", {
            type: "POST",
            data: newSam
        }).then(
            function () {
                console.log("created sammich");
                location.reload();
            }
        )
    });

    $(".delete-sammich").on("click", function (event) {
        let id = $(this).data("id");
        $.ajax("/api/sammiches/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted sammich ", id);
                location.reload();
            }
        )
    })

    $(".change-devour").on("click", function () {
        let id = $(this).data("id");
        // alert("Click working " + id)
        $.ajax("/api/sammiches/" + id, {
            type: "PUT"
        }).then(
            function (res) {
                console.log(res);
                location.reload();
            }
        )

    })



})