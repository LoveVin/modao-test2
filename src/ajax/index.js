function ajax() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([
                { name: '墨刀实验室', color: "#80d294", isLocked: false, isPrivate: false, itemCount: 3},
                { name: '墨刀魔法棒团队', color: "#f7c273", isLocked: false, isPrivate: false, itemCount: 0},
                { name: '超级工作组', color: "#f2908d",isLocked: false, isPrivate: true, itemCount: 4},
                { name: '冷笑客服组', color: "#e38073", isLocked: false, isPrivate: false, itemCount: 4},
                { name: '设计部门', color: "#f8c767", isLocked: false, isPrivate: false, itemCount: 4},
                { name: 'Third Reactor', color: "#8dcaeb", isLocked: true, isPrivate: true, itemCount: 1}
            ])
        }, 1000);
    })
}

export default ajax