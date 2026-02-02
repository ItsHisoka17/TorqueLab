if [ -z "$1" ]; then

echo "Enter Port:"
read port

pid=$(lsof -ti:$port)
kill $pid

else

pid=$(lsof -ti:$1)
kill $pid
fi