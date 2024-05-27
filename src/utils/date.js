export  const dateTime = ()=>{
    const time = new Date()
    const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const day = time.getDate();
    return `${year}年${month}月${day}日`
  }
