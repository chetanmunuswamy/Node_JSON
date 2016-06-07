$("#submit").click(function(){
    var name = $("#nameId").val();
    var date = $("#dateId").val();
    var assigned = $("#assignedId").val();
    var list = "<tr><td>" + name + "</td><td>" + date + "</td><td>" + assigned + "</td></tr>"; 
    var show = $("#show");
    show.prepend(list);
});