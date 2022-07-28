# 本地快速重启远程服务。用于调试。
#!/bin/bash
ssh root@110.40.190.168 > /dev/null 2>&1 << eeooff
cd /www/rdm/service-spring
git pull
./gradlew bootrun
exit
eeooff
echo done! at `date "+%Y-%m-%d %H:%M:%S"`