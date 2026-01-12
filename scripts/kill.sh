port=3000

pid=$(lsof -ti:$port)

kill -9 $pid