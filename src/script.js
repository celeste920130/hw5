$(function() {
	const video1 = $('#video1').get(0);
	const video2 = $('#video2').get(0);
	let video1Played = false;
	let video2Played = false;

	const playVideoOnScroll = (videoElement, sectionTop, sectionBottom) => {
		const scrollPosition = $(document).scrollTop();
		
		if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
			const maxScroll = sectionBottom - sectionTop;
			const relativeScroll = scrollPosition - sectionTop;
			videoElement.currentTime = videoElement.duration * (relativeScroll / maxScroll);
			
			if (!videoElement.playing) videoElement.play();
		} else {
			videoElement.pause();
		}
	};

	$(window).on('scroll', function() {
		const video1SectionTop = $('.video-section').eq(0).offset().top;
		const video1SectionBottom = video1SectionTop + $('.video-section').eq(0).height();
		const video2SectionTop = $('.video-section').eq(1).offset().top;
		const video2SectionBottom = video2SectionTop + $('.video-section').eq(1).height();

		if (!video1Played && $(window).scrollTop() >= video1SectionTop - $(window).height() / 2) {
			video1Played = true;
		}

		if (!video2Played && $(window).scrollTop() >= video2SectionTop - $(window).height() / 2) {
			video2Played = true;
		}

		playVideoOnScroll(video1, video1SectionTop, video1SectionBottom);
		playVideoOnScroll(video2, video2SectionTop, video2SectionBottom);
	});
});
