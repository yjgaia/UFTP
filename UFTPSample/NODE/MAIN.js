UFTPSample.MAIN = METHOD({

	run : () => {
		
		let ftp = UFTP.CONNECT(UFTPSample.Sercured.connectInfo);
		
		/* {
			host : '호스트 도메인',
			port : 포트 번호,
			username : '아이디',
			password : '비밀번호'
		}*/
	}
});
