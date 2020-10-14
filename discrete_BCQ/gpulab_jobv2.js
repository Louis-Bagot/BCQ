{
    "name": "Baseline BCQ - generate_buffer",
    "request": {
        "resources": {
            "cpus": 2,
            "gpus": 1,
            "cpuMemoryGb": 32,
            "clusterId": 7,
            "minCudaVersion": 10
        },
        "docker": {
            "image": "gitlab+deploy-token-197:pVdPsj5atFfJS55NnvpC@gitlab.ilabt.imec.be:4567/lbagot/explore_option:dqn_breakout",
            "storage": [
                {
                    "hostPath": "/project/",
                    "containerPath": "/app/data/"
                }
            ]
        },
        "scheduling": {
            "interactive": false
        }
    },
    "description": "Training behavioral to store the trained model."
}
