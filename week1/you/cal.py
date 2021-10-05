import time
import random
def winlose(a,b):
    if a not in groupstage:
        groupstage[a]=0
    if b not in groupstage:
        groupstage[b]=0
    number=random.randint(1,100)
    if(abs(team[a]-number))>(abs(team[b]-number)):
        if a==user or b==user:
            print("{} vs {}, {}가 승리했습니다.".format(a,b,a))
        groupstage[a]+=3
    elif (abs(team[a]-number))<(abs(team[b]-number)):
        if a==user or b==user:
            print("{} vs {}, {}가 승리했습니다.".format(a,b,b))
        groupstage[b]+=3
    else:
        if a==user or b==user:
           print("{} vs {}, 둘의 경기는 무승부 입니다.".format(a,b))
        groupstage[a]+=1
        groupstage[b]+=1
def tournaments(a,b):
    number=random.randint(1,100)
    if(abs(team[a]-number))>=(abs(team[b]-number)):
        print("{}가 승리했습니다.".format(a))
        semifinal.append(a)
    elif (abs(team[a]-number))<(abs(team[b]-number)):
        print("{}가 승리했습니다.".format(b))
        semifinal.append(b)
def semifinals(a,b):
    number=random.randint(1,100)
    if(abs(team[a]-number))>=(abs(team[b]-number)):
        print("{}가 승리했습니다.".format(a))
        final.append(a)
    elif (abs(team[a]-number))<(abs(team[b]-number)):
        print("{}가 승리했습니다.".format(b))
        final.append(b)
def finals(a,b):
    number=random.randint(1,100)
    if(abs(team[a]-number))>=(abs(team[b]-number)):
        print("{} 최종 우승".format(a))
    elif (abs(team[a]-number))<(abs(team[b]-number)):
        print("{} 최종 우승".format(b))
team={"C103":100, "C201":0,"C205":95,"C105":5,"C307":90,"C302":10,"C101":85,"C303":15,"C102":80,"C106":20,"C203":75
    ,"C207":25,"C301":70,"C104":30,"C305":65,"C204":35,"C206":60,"C304":40,"C306":55,"C202":45}
group=[]
groupstage={}
tournament=[]
semifinal=[]
final=[]
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
                time.sleep(0.2)
        groupstages=sorted(groupstage.items(),key=lambda x:x[1],reverse=True)
        tournament.append(groupstages[0][0])
        tournament.append(groupstages[1][0])
        groupstage={}
time.sleep(3)
print("8강 진출 팀 : {}".format(" ,".join(tournament)))
time.sleep(3)
random.shuffle(tournament)
for i in range(0,8,2):
    print("8강 {}번 쨰 경기 : {} vs {}".format(i//2+1,tournament[i],tournament[i+1]))
    time.sleep(3)
    tournaments(tournament[i],tournament[i+1])
time.sleep(3)
print("4강 진출팀 : {}".format(" ,".join(semifinal)))
time.sleep(3)
random.shuffle(semifinal)
for i in range(0,4,2):
    print("4강 {}번 쨰 경기 : {} vs {}".format(i//2+1,semifinal[i],semifinal[i+1]))
    time.sleep(4)
    semifinals(semifinal[i],semifinal[i+1])
time.sleep(3)
print("결승 진출팀 : {}".format(" ,".join(final)))
time.sleep(3)
print("결승전 : {} vs {}".format(final[0],final[1]))
time.sleep(5)
finals(final[0],final[1])

