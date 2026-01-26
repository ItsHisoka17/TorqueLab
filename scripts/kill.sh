if [ -z "$1" ]; then

echo "Enter Port:"
read port

pid=$(lsof -ti:$port)
kill -9 $pid

else

pid=$(lsof -ti:$1)
kill -9 $pid
fi