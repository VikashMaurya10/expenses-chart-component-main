$.getJSON("./assets/data/data.json", (data) => {
  const date = new Date();
  $.each(data, (index, value) => {
    $(".inner_main__chart__graph").append(`
        <div class="col d-f ai-c fd-c ai-c" id=graph-${index}>
            <div class='show_amount' style="opacity:0" >$${value.amount}</div>
            <div id="${index}" style="height:0px;"></div>
            <p>${value.day}</p>
        </div>
      `);
  });
  //
  $(".col").each((index, element) => {
    $(element).hover(
      () => {
        $(element).children().eq(1).css("opacity", "0.6");
        $(element).children().eq(0).css({
          opacity: "1",
        });
      },
      () => {
        $(element).children().eq(1).css("opacity", "1");
        $(element).children().eq(0).css({
          opacity: "0",
        });
      }
    );
  });
  setTimeout(() => {
    $.each(data, (index, value) => {
      let height = value.amount;
      let totalHeight = 100;
      let newHeight = (totalHeight / 40) * height;
      if (date.getDay() == index + 1) {
        $(`#${index}`).css({
          height: `${newHeight}px`,
          backgroundColor: "hsl(186, 34%, 60%)",
        });
      } else {
        $(`#${index}`).css({
          height: `${newHeight}px`,
          backgroundColor: " hsl(10, 79%, 65%)",
        });
      }
    });
  }, 50);
});
