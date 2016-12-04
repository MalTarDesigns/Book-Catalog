$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data/catalog.xml",
        dataType: "xml",
        success: xmlParser
    });

function xmlParser(xml) {
    $(xml).find("book").each(function () {
        $(".books")
            .append(
                `
                    <div class="col-sm-6">
                        <div class="thumbnail">
                        <img src="http://placehold.it/343x200" alt="Book">
                        <div class="caption">
                            <h3><strong>Author: </strong>`+ $(this).find("author").text() +`</h3>
                            <h4><strong>Title: </strong>`+ $(this).find("title").text() +`</h4>
                            <p><strong>Genre: </strong>`+ $(this).find("genre").text() +`</p>
                            <p><strong>Price: </strong> $`+ $(this).find("price").text() +`</p>
                            <p><strong>Publish Date: </strong>`+ $(this).find("publish_date").text() +`</p>
                            <p>`+ $(this).find("description").text() +`</p>
                        </div>
                        </div>
                    </div>
                `  
                    );
    });
}







});