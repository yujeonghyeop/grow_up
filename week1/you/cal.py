import operator
import random

def winlose(a,b):
    if a not in groupstage:
        groupstage[a]=0
    if b not in groupstage:
        groupstage[b]=0
    number=random.randint(1,100)
    if(abs(team[a]-number))>(abs(team[b]-number)):
        print("{} vs {}, {}가 승리했습니다.".format(a,b,a))
        groupstage[a]+=3
    elif (abs(team[a]-number))<(abs(team[b]-number)):
        print("{} vs {}, {}가 승리했습니다.".format(a,b,b))
        groupstage[b]+=3
    else:
        print("{} vs {}, 둘의 경기는 무승부 입니다.".format(a,b))
        groupstage[a]+=1
        groupstage[b]+=1
team={"C103":100, "C201":0,"C205":95,"C105":5,"C307":90,"C302":10,"C101":85,"C303":15,"C102":80,"C106":20,"C203":75
    ,"C207":25,"C301":70,"C104":30,"C305":65,"C204":35,"C206":60,"C304":40,"C306":55,"C202":45}
group=[]
groupstage={}
print("플레이 하고싶은 팀을 입력 하세요! :")
user=input()
a=list(team.keys())
for i in range(4):
    b=random.sample(a,5)
    for j in range(5):
        a.remove(b[j])
    group.append(b)
print("조편성 완료 \nA조:{}\nB조:{}\nC조:{}\nD조:{}".format(" ".join(group[0])," ".join(group[1])," ".join(group[2])," ".join(group[3])))
for i in range(4):
        for j in range(5):
            for k in range(j+1,5):
                winlose(group[i][j],group[i][k])
        print(groupstage)
        groupstage={}
        print(groupstage)
# print(groupstage)
# groupstages=sorted(groupstage.items(),key=lambda x:x[1],reverse=True)
# print(groupstages)
