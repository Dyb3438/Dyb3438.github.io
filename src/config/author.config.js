export default{
    name: 'Yongyi Su',
    avatar_pic: './imgs/YongyiSu2.jpeg',
    role: 'PhD Student',
    school: {name: 'South China University of Technology', url: 'https://www.scut.edu.cn/'},
    college: {name: '', url: ''},
    email: 'eesuyongyi@mail.scut.edu.cn',
    options: {
        'Google Scholar': 'https://scholar.google.com/citations?user=0MDbs-8AAAAJ',
        'GitHub': 'https://github.com/Dyb3438',
        'OpenReview': 'https://openreview.net/profile?id=~Yongyi_Su1',
    },

    aboutMe: `
    I am pursuing a Master-Doctor combined program and am currently a <b>PhD student</b> in <a href="https://github.com/Gorilla-Lab-SCUT">Geometric Perception and Intelligence Research Lab</a> (Gorilla Lab) in <a href="https://www2.scut.edu.cn/ee/">the School of Electronic and Information Engineering</a> at <a href="https://www.scut.edu.cn/">South China University of Technology</a> (SCUT) from <b>Sept. 2022</b>. My PhD supervisors are Prof. <a href="http://kuijia.site/">Kui Jia</a> and Dr. <a href="https://alex-xun-xu.github.io/">Xun Xu</a> (joint supervisor). </br></br>
    Prior to that, I received my <b>B.Eng.</b> from the School of Electronic and Information Engineering, SCUT in <b>Jun. 2021</b>. In <b>Sept. 2021</b>, I undertook an one-year <b>MSc study</b> in Gorilla Lab at SCUT under the supervision of Associate Prof. <a href="https://scholar.google.com/citations?user=pbNCoTwAAAAJ">Ke Chen</a>. </br></br>
    My recent research interests focus on <span style="color:#f75522"><b>test-time adaptation</b></span>, <span style="color:#55f722"><b>domain adaptation</b></span> and <span style="color:#5522f7"><b>incomplete supervised learning</b></span>. I really enjoy my research and if you are interested or troubled by it, you are welcome to discuss it with me.
    `,

    news: [
        `Jul 2023: Our work on <b>On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion</b> was accepted by ICCV 2023. Congratulations to Yushu Li!`,
        `May 2023: Our work on <b>Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning</b> was accepted by IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).`,
        `Sep 2022: Our work on <b>Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering</b> was accepted by NeurIPS 2022.`,
    ],

    publications: {
        2023: [
            {
                image: './imgs/2023_LiEtAl_OWTTT.png',
                title: 'On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion',
                author: 'Yushu Li, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'IEEE/CVF International Conference on Computer Vision (<b>ICCV</b>), 2023',
                keywords: ['Test-Time Training', 'Open-World Test-Time Training', 'Domain Adaptation', 'Self Training'],
                options: {
                    'PDF': '.',
                    // 'Bibtex': '',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            },
            {
                image: './imgs/2023_SuEtAl_MulPro.png',
                title: 'Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'IEEE Transactions on Circuits and Systems for Video Technology (<b>TCSVT</b>), 2023',
                keywords: ['Weakly Supervised Learning', 'Point Cloud', 'Semantic Segmentation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2205.03137',
                    'Bibtex': './bibtexs/2023_SuEtAl_MulPro.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            },
            {
                image: './imgs/2023_ChenEtAl_STFAR.png',
                title: 'STFAR: Improving Object Detection Robustness at Test-Time by Self-Training with Feature Alignment Regularization',
                author: 'Yijin Chen, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Test-Time Training', 'Object Detection', 'Self Training', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.17937',
                    'Bibtex': './bibtexs/2023_ChenEtAl_STFAR.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            },
            {
                image: './imgs/2023_SuEtAl_TTAC++.png',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering Regularized Self-Training',
                author: '<b>Yongyi Su</b>, Xun Xu, Tianrui Li and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Test-Time Training', 'Self Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.10856',
                    'Bibtex': './bibtexs/2023_SuEtAl_TTAC++.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                }
            }
        ],

        2022: [
            {
                image: './imgs/2022_SuEtAl_TTAC.png',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'Advances in Neural Information Processing Systems (<b>NeurIPS</b>), 2022',
                keywords: ['Test-Time Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2206.02721',
                    'Bibtex': './bibtexs/2022_SuEtAl_TTAC.bib',
                    'Project Page': './ProjectPage/2022_SuEtAl_TTAC',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TTAC',
                }
            }
        ]
    },

    analysis_globe_id: 'ZDtaUoW728eYUFp5JX7le2e2P1sZJLUg9RrVZQf7j5g'
}