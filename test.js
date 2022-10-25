const cookie = "1666704320.908.JvD1wA4Tc4f95L2z-fobcnh2teb7dva50g45mijtihq0b4ba3-00";

((cookie) => {
		const nonce = cookie.split('-')[0];
		for(let i = 0; i < 999999; i++){

				const con = md5(nonce + i)

				if(con.substr(0, 2) == "00"){
						console.log(i)//141
 						return i;
				}
		}
})(cookie)
