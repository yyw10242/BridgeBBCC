configData = {
	numChatMax				: 20,
	personalColor			:	/*false*/true,
	badgeVisible			: true,
	themeURI					: "",
	theme							: "default",
	themeName					: "",
	msgExistDuration	: 5,
	msgAniDuration		: 1,
	debugLevel				:	2,
	useDisplayName		: true,
	loadCheerImgs			: true,
	loadTwitchCons		: true,
	consRealSubsOnly	: true,
	loadDcCons				: true,
	dcConsURI					: "C:/Users/RaonMaru/Documents/GitHub/dcConRaon",
  subMonthsMsg			: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg         : "☆ {!0:{bits} 비트 }후원 ! ☆",
	loadClipPreview		: true,
	clipReplaceMsg		: "[ 클립 ]",
	webSocket					: "wss://irc-ws.chat.twitch.tv:443",
	nick							: "justinfan16831",
	pass							: "foobar",
	channel						: "#yyw10242",
	retryInterval			: 2,
	allMessageHandle	: /*false*/true,
	muteUser					: ["Nightbot"],
	deleteBanMsg			: true,
	commands					: [
		{exe:"clear", msg:"!!clear"},
		{exe:"theme", msg:"!!theme"}
	],
	replaceMsgs				: [
		{orig:/^![a-zA-Z]+/, to:"{no_display}"}			// 봇 호출 영문 메세지 미표시
	]
};
