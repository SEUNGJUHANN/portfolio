$(document).ready(function () {
    let videosData = [];

    // JSON 파일 로드
    $.getJSON("videos.json", function (data) {
      videosData = data;
    });

    // Modal 열기
    $(".mg-card, .ms-card").click(function () {
      var videoId = $(this).data("id"); // data-id 속성에서 비디오 ID 가져오기
      var videoData = videosData.find((video) => video.id === videoId); // JSON 데이터에서 해당 ID의 비디오 정보 찾기

      if (videoData) {
        $("#modal iframe").attr("src", videoData.youtubeLink); // iframe src에 유튜브 링크 적용
        $("#modal").fadeIn();
      }
    });

    // Modal 닫기
    $("#modal-close, #modal-background").click(function () {
      $("#modal").fadeOut();
      $("#modal iframe").attr("src", ""); // Modal 닫을 때 비디오 정지
    });
  });