$.getJSON("data.json", function(data){

          var tasks = data.tasks;
          for(var i = 0; i < tasks.length; i++) {
            var list = "<tr><td style = 'width:40%; padding-left: 2%;'>" + tasks[i].name + "</td><td style = 'font-size: 12px; text-align: left; color: #666666'>" + tasks[i].date + "</td><td style = 'text-align: right; padding-right: 3%'>" + tasks[i].assigned + "</td></tr>"; 
            var show = $("#show");
            show.prepend(list);
          }
      });