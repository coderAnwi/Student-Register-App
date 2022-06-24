var original = [];

function submit()
{
    var dis_array = [];

    for (var j = 1; j <= 4; j++)
    {
        var n = document.getElementById("name_of_the_student_"+j).value;
        console.log(n);
        original.push(n);

        
    }

    console.log(original);

    var len = original.length;
    console.log(len);

    for (var k=0; k < len; k++)
    {
        dis_array.push("<h4>NAME -"+ original[k] + "</h4>");

    }

    document.getElementById("display_name_with_commas").innerHTML = dis_array;

    var re = dis_array.join(" ");
    console.log(re);
    document.getElementById("display_name_without_commas").innerHTML = re;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    original.sort();

    var dis_sort = [];

    var len = original.length;
    console.log(len);

    for (var k=0; k < len; k++)
    {
        dis_sort.push("<h4>NAME -"+ original[k] + "</h4>");

    }

    var re = dis_sort.join(" ");
    console.log(re);
    document.getElementById("display_name_without_commas").innerHTML = re;

}