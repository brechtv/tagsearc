$(function() {
    const URL = "https://spreadsheets.google.com/feeds/list/11CP_VBvJFypPCeruru821RKlmnzvIEgkhFqT4kiws6g/od6/public/values?alt=json";

    $.getJSON(URL, function(data) {
        var results = data.feed.entry;

        $.each(results, function(i, result) {
            $("#tagsTable").append(`<tr><td>${result.gsx$currenttag.$t}</td><td>${result.gsx$proposedtag.$t}</td></tr>`)


            $("#tagsInput").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#tagsTable tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    });
});