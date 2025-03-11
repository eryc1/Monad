// 任务列表和对应的跳转 URL
const tasks = [
    { name: "Apriori质押", url: "https://stake.apr.io/" },
    { name: "Kuru合约交易", url: "https://www.kuru.io/markets" },
    { name: "Acura手机挖矿", url: "https://acurast.com/processor/" },
    { name: "Accountable游戏", url: "https://game.accountable.capital/" },
    { name: "Meme交易", url: "https://testnet.nad.fun/ref/md1Zj6" },
    { name: "Morkie的NFT", url: "https://morkie.xyz/monad" },
    { name: "Uni流换", url: "https://app.uniswap.org/swap" },
    { name: "OwltI部署合约", url: "https://owlto.finance/deploy/" },
    { name: "Monad域名", url: "https://magiceden.io/collections/monad-testnet/0x3019bf1dfb84e5b46ca9d0eec37de08a59a41308" },
    { name: "Orbiter跨链", url: "https://testnet.orbiter.finance/en?src_chain=11155111&tgt_chain=10143&src_token=ETH" },
    { name: "Bebop刷交易", url: "https://bebop.xyz/trade?network=monad&sell=MON&buy=WMON" },
    { name: "Aicraft投票", url: "https://aicraft.fun/projects/fizen" },
    { name: "Talentum任务", url: "https://monad.talentum.id/projects" },
    { name: "Sparkballs NFT", url: "https://magiceden.io/mint-terminal/monad-testnet/0xa951bb8126d81d6aeaf73cc335fc7b7444df9520" },
    { name: "Curvance借贷", url: "https://app.curvance.com/" },
    { name: "Chogstars mint NFT", url: "https://testnet.lilchogstars.com/" },
    { name: "Alchemy的NFT", url: "https://magiceden.io/mint-terminal/monad-testnet/0x436ee7219bb099f71c9db9c7de8862a9bde891ae" },
    { name: "The Pipeline NFT", url: "https://the-pipeline.testnet.nfts2.me/" },
    { name: "Purple Friends NFT", url: "https://magiceden.io/mint-terminal/monad-testnet/0xfd3b54bd826cea09d15e87f95a869ecf3e462f92" },
    { name: "Nerzo的NFT", url: "https://www.nerzo.xyz/monad" },
    { name: "L3任务", url: "https://app.layer3.xyz/campaigns/monad-ecosystem-campaign" },
    { name: "DeMask swap/NFT", url: "https://app.demask.finance/launchpad" },
    { name: "Early Tester Monad NFT", url: "https://magiceden.io/mint-terminal/monad-testnet/0xb2ea0ff3ad4134367fb7dc75d48b3493e5a09c81" },
    { name: "Ambient交易", url: "https://monad.ambient.finance/" },
    { name: "bean swap任务", url: "https://perp.bean.exchange/#/trade" },
    { name: "Nostra借贷", url: "https://monad.nostra.finance/" },
    { name: "Magma质押", url: "https://www.magmastaking.xyz/?invitedBy=6R5mji" },
    { name: "Fantasy卡牌", url: "https://monad.fantasy.top/" }
];

// 找到任务容器
const taskContainer = document.getElementById("task-container");

// 渲染任务
function showTasks() {
    // 打乱任务顺序
    const shuffledTasks = [...tasks].sort(() => Math.random() - 0.5);
    
    // 清空旧任务
    taskContainer.innerHTML = "";

    // 添加每个任务
    shuffledTasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");
        taskDiv.innerHTML = `
            <span class="task-number">${index + 1}</span>
            <span class="task-text">${task.name}</span>
            <span class="checkbox"></span>
        `;
        // 检查是否已勾选
        if (sessionStorage.getItem(task.name) === "true") {
            taskDiv.classList.add("checked");
        }
        // 点击事件：在新页面打开 URL，异步保存状态
        taskDiv.addEventListener("click", () => {
            if (task.url) {
                window.open(task.url, "_blank"); // 在新标签页打开
            }
            // 异步保存勾选状态，避免阻塞
            setTimeout(() => {
                taskDiv.classList.toggle("checked");
                sessionStorage.setItem(task.name, taskDiv.classList.contains("checked"));
            }, 0);
        });
        taskContainer.appendChild(taskDiv);
    });
}

// 页面加载时运行
window.onload = showTasks;