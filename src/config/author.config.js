export default{
    name: 'Yongyi Su',
    avatar_pic: './imgs/YongyiSu2.webp',
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
    I am pursuing a Master-Doctor combined program and am currently a <b>PhD student</b> in <a href="https://github.com/Gorilla-Lab-SCUT">Geometric Perception and Intelligence Research Lab</a> (Gorilla Lab) in <a href="https://www2.scut.edu.cn/ee/">the School of Electronic and Information Engineering</a> at <a href="https://www.scut.edu.cn/">South China University of Technology</a> (SCUT) from <b>Sept. 2022</b>. My PhD supervisors are Prof. <a href="http://kuijia.site/">Kui Jia</a> and Dr. <a href="https://alex-xun-xu.github.io/">Xun Xu</a> (joint supervisor). <div style="height:var(--smallFont)"></div>
    Prior to that, I received my <b>B.Eng.</b> from the School of Electronic and Information Engineering, SCUT in <b>Jun. 2021</b>. In <b>Sept. 2021</b>, I undertook an one-year <b>MSc study</b> in Gorilla Lab at SCUT under the supervision of Associate Prof. <a href="https://scholar.google.com/citations?user=pbNCoTwAAAAJ">Ke Chen</a>. <div style="height:var(--smallFont)"></div>
    My recent research interests focus on <a style="color:#f75522" href="#Segment Anything / Foundation Model"><b>foundation model</b></a>, <a style="color:#55f722" href="#Test-Time Adaptation / Test-Time Training"><b>test-time adaptation</b></a> and <a style="color:#5522f7" href="#Weakly Supervised Learning"><b>weakly supervised learning</b></a>. I really enjoy my research and if you are interested or troubled by it, you are welcome to discuss it with me. <div style="height:var(--smallFont)"></div>
    📜 Download my <a href="./cv/CV of Yongyi Su(2024.12).pdf" target="_blank">CV</a>.
    `,

    news: [
        `Jan 2025: Our work on <b>PointSAM: Pointly-Supervised Segment Anything Model for Remote Sensing Images</b> was accepted by IEEE Transactions on Geoscience and Remote Sensing (TGRS). Congratulations to Nanqing Liu!`,
        `Jan 2025: Our work on <b>Exploring Human-in-the-Loop Test-Time Adaptation by Synergizing Active Learning and Model Selection</b> was accepted by Transactions on Machine Learning Research (TMLR). Congratulations to Yushu Li!`,
        `Jan 2025: Our work on <b>Augmented Contrastive Clustering with Uncertainty-Aware Prototyping for Time Series Test Time Adaptation</b> was accepted by 31st SIGKDD Conference on Knowledge Discovery and Data Mining (KDD). Congratulations to Peiliang Gong!`,
        `Dec 2024: I received the ACM MM 2024 Outstanding Reviewer Award. (<a href='https://2024.acmmm.org/outstanding-ac-reviewer'>Source</a>)`,
        `March 2024: Our work on <b>CLIP-guided Source-free Object Detection in Aerial Images</b> was accepted by IGARSS 2024 as <b>Oral presentation</b>. Congratulations to Nanqing Liu!`,
        `Feb 2024: Our work on <b>Improving the Generalization of Segmentation Foundation Model under Distribution Shift via Weakly Supervised Adaptation</b> was accepted by CVPR 2024. Congratulations to Haojie Zhang!`,
        `Feb 2024: Our work on <b>Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering Regularized Self-Training</b> was accepted by TPAMI 2024. Congratulations!`,
        `Dec 2023: Our work on <b>Towards Real-World Test-Time Adaptation: Tri-net Self-Training with Balanced Normalization</b> was accepted by AAAI 2024.`,
        `Nov 2023: I'm studying at <a href='https://www.a-star.edu.sg/i2r'>I<sup>2</sup>R, A*STAR</a> as a visit student, funded by <a href='https://www.csc.edu.cn/'>CSC</a>, due to Nov 2025.`,
        `Jul 2023: Our work on <b>On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion</b> was accepted by <b>ICCV 2023 as Oral presentation</b>. Congratulations to Yushu Li!`,
        `May 2023: Our work on <b>Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning</b> was accepted by IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).`,
        `Sep 2022: Our work on <b>Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering</b> was accepted by NeurIPS 2022.`,
    ],
 
    academicFootprints: {
        'Education Background':[
            [
                '<b>Master-Doctor program in South China Univeristy of Technology</b>',
                '2021.09-Now',
                'Supervisor: Prof. Kui Jia and Dr. Xun Xu'
            ],
            [
                '<b>B.Eng in South China Univeristy of Technology</b>',
                '2017.09-2021.06'
            ]
        ],
        'Academic Services':[
            [
                '<b>Journal Reviewer</b>',
                'TPAMI, TIP, TCSVT, TMLR',
            ],
            [
                '<b>Conference Reviewer</b>',
                'ICML, ICLR, NeurIPS, ACM MM, CVPR, ECCV, ACCV, ICME.'
            ]
        ],
    },

    publication_category: ['Segment Anything / Foundation Model', 'Test-Time Adaptation / Test-Time Training', 'Weakly Supervised Learning'],
    publications: {
        2025: [
            {
                image: './imgs/2025_LiEtAl_HILTTA.webp',
                title: 'Exploring Human-in-the-Loop Test-Time Adaptation by Synergizing Active Learning and Model Selection',
                author: 'Yushu Li<equal></equal>, <b>Yongyi Su<equal></equal></b>, Xulei Yang, Kui Jia and Xun Xu',
                publisher: 'Transactions on Machine Learning Research (<b>TMLR</b>), 2025',
                keywords: ['Test-Time Adaptation', 'Human-in-the-Loop', 'Model Selection', 'Active Learning'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2405.18911',
                    'Bibtex': './bibtexs/2025_LiEtAl_HILTTA.bib',
                },
                paper_url: 'https://arxiv.org/pdf/2405.18911',
                new: true
            },
            {
                image: './imgs/2025_LiuEtAl_PointSAM.jpg',
                title: 'PointSAM: Pointly-Supervised Segment Anything Model for Remote Sensing Images',
                author: 'Nanqing Liu, Xun Xu, <b>Yongyi Su</b>, Haojie Zhang and Heng-Chao Li',
                publisher: 'IEEE Transactions on Geoscience and Remote Sensing (<b>TGRS</b>), 2025',
                keywords: ['Segment Anything', 'Foundation Model', 'Remote Sensing'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2409.13401',
                    'Bibtex': './bibtexs/2025_LiuEtAl_PointSAM.bib',
                    'Project Page': 'https://github.com/Lans1ng/PointSAM',
                    'Code': 'https://github.com/Lans1ng/PointSAM'
                },
                paper_url: 'https://arxiv.org/pdf/2409.13401',
                new: true
            },
            {
                image: './imgs/2025_GongEtAl_Aug.webp',
                title: 'Augmented Contrastive Clustering with Uncertainty-Aware Prototyping for Time Series Test Time Adaptation',
                author: 'Peiliang Gong, Mohamed Ragab, Min Wu, Zhenghua Chen, <b>Yongyi Su</b>, Xiaoli Li and Daoqiang Zhang',
                publisher: 'SIGKDD Conference on Knowledge Discovery and Data Mining (<b>KDD</b>), 2025',
                keywords: ['Test-Time Adaptation', 'Time Series Data', 'Prototype Learning', 'Contrastive and Clustering'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2501.01472',
                    'Bibtex': './bibtexs/2025_GongEtAl_Aug.bib',
                },
                paper_url: 'https://arxiv.org/pdf/2501.01472',
                new: true
            },
            {
                image: './imgs/2025_LiEtAl_ECALP.webp',
                title: 'Efficient and Context-Aware Label Propagation for Zero-/Few-Shot Training-Free Adaptation of Vision-Language Model',
                author: 'Yushu Li, <b>Yongyi Su</b>, Adam Goodge, Kui Jia and Xun Xu',
                publisher: 'Preprint, 2025',
                keywords: ['CLIP', 'Vision Language Model', 'Foundation Model'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2412.18303',
                    'Bibtex': './bibtexs/2025_LiEtAl_ECALP.bib',
                },
                paper_url: 'https://arxiv.org/pdf/2412.18303',
                new: true
            },
            {
                image: './imgs/2025_SuEtAl_TTDP.webp',
                title: 'On the Adversarial Risk of Test Time Adaptation: An Investigation into Realistic Test-Time Data Poisoning',
                author: '<b>Yongyi Su</b>, Yushu Li, Nanqing Liu, Kui Jia, Xulei Yang, Chuan-Sheng Foo and Xun Xu',
                publisher: 'Preprint, 2025',
                keywords: ['Test-Time Adaptation', 'Data Poisoning', 'Adversarial Attack'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2410.04682',
                    'Bibtex': './bibtexs/2024_SuEtAl_TTDP.bib'
                },
                paper_url: 'https://arxiv.org/pdf/2410.04682',
                new: true
            },
        ],
        2024: [
            {
                image: './imgs/2024_SuEtAl_TTAC-.webp',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering Regularized Self-Training',
                author: '<b>Yongyi Su<equal></equal></b>, Xun Xu<equal></equal>, Tianrui Li and Kui Jia',
                publisher: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (<b>TPAMI</b>), 2024',
                keywords: ['Test-Time Training', 'Self Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.10856',
                    'Bibtex': './bibtexs/2024_SuEtAl_TTAC++.bib',
                    'Project Page': 'https://github.com/Gorilla-Lab-SCUT/TTAC2',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TTAC2'
                },
                // new: true,
                paper_url: 'https://arxiv.org/pdf/2303.10856',
            },
            {
                image: './imgs/2023_SuEtAl_TRIBE.webp',
                title: 'Towards Real-World Test-Time Adaptation: Tri-net Self-Training with Balanced Normalization',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'Proceedings of the AAAI conference on artificial intelligence (<b>AAAI</b>), 2024',
                keywords: ['Test-Time Adaptation', 'Real-World Test-Time Adaptation', 'Balanced BN', 'Self Training'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2309.14949',
                    'Bibtex': './bibtexs/2023_SuEtAl_TRIBE.bib',
                    'Project Page': 'https://github.com/Gorilla-Lab-SCUT/TRIBE',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TRIBE',
                    'Poster': './posters/2024_SuEtAl_TRIBE.pdf'
                },
                paper_url: 'https://arxiv.org/pdf/2309.14949',
                // new: true
            },
            {
                image: './imgs/2024_ZhangEtAl_WeSAM.webp',
                title: 'Improving the Generalization of Segmentation Foundation Model under Distribution Shift via Weakly Supervised Adaptation',
                author: 'Haojie Zhang<equal></equal>, <b>Yongyi Su<equal></equal></b>, Xun Xu and Kui Jia',
                publisher: 'IEEE Conference on Computer Vision and Pattern Recognition (<b>CVPR</b>), 2024',
                keywords: ['Segment Anything', 'Foundation Model', 'Weakly Supervised Learning', 'Domain Adaptation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2312.03502',
                    'Bibtex': './bibtexs/2024_ZhangEtAl_WeSAM.bib',
                    'Project Page': 'https://zhang-haojie.github.io/project-pages/wesam.html',
                    'Code': 'https://github.com/Zhang-Haojie/WeSAM'
                },
                // new: true,
                paper_url: 'https://arxiv.org/pdf/2312.03502',
            },
            {
                image: './imgs/2024_LiuEtAl_SFOD.webp',
                title: 'CLIP-guided Source-free Object Detection in Aerial Images',
                author: 'Nanqing Liu, Xun Xu, <b>Yongyi Su</b>, Chengxin Liu, Peiliang Gong and Heng-Chao Li',
                publisher: 'International Geoscience and Remote Sensing Symposium (<b>IGARSS</b>), 2024 (Oral presentation)',
                keywords: ['CLIP', 'Foundation Model', 'Object Detection', 'Source-Free Domain Adaptation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2401.05168',
                    'Bibtex': './bibtexs/2024_LiuEtAl_SFOD.bib',
                    'Project Page': 'https://github.com/Lans1ng/SFOD-RS',
                    'Code': 'https://github.com/Lans1ng/SFOD-RS'
                },
                paper_url: 'https://arxiv.org/pdf/2401.05168',
                // new: true
            },
        ],
        2023: [
            {
                image: './imgs/2023_LiEtAl_OWTTT.webp',
                title: 'On the Robustness of Open-World Test-Time Training: Self-Training with Dynamic Prototype Expansion',
                author: 'Yushu Li, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'IEEE/CVF International Conference on Computer Vision (<b>ICCV</b>), 2023 (Oral presentation)',
                keywords: ['Test-Time Training', 'Open-World Test-Time Training', 'Domain Adaptation', 'Self Training'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2308.09942',
                    'Bibtex': './bibtexs/2023_LiEtAl_OWTTT.bib',
                    'Project Page': 'https://yushu-li.github.io/owttt-site',
                    'Code': 'https://github.com/Yushu-Li/OWTTT',
                    'Poster': './posters/2023_LiEtAl_OWTTT.pdf'
                },
                paper_url: 'https://arxiv.org/pdf/2308.09942',
            },
            {
                image: './imgs/2023_SuEtAl_MulPro.webp',
                title: 'Weakly Supervised 3D Point Cloud Segmentation via Multi-Prototype Learning',
                author: '<b>Yongyi Su</b>, Xun Xu and Kui Jia',
                publisher: 'IEEE Transactions on Circuits and Systems for Video Technology (<b>TCSVT</b>), 2023',
                keywords: ['Weakly Supervised Learning', 'Point Cloud', 'Semantic Segmentation'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2205.03137',
                    'Bibtex': './bibtexs/2023_SuEtAl_MulPro.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                },
                paper_url: 'https://arxiv.org/pdf/2205.03137',                
            },
            {
                image: './imgs/2023_ChenEtAl_STFAR.webp',
                title: 'STFAR: Improving Object Detection Robustness at Test-Time by Self-Training with Feature Alignment Regularization',
                author: 'Yijin Chen, Xun Xu, <b>Yongyi Su</b> and Kui Jia',
                publisher: 'Preprint, 2023',
                keywords: ['Test-Time Training', 'Object Detection', 'Self Training', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2303.17937',
                    'Bibtex': './bibtexs/2023_ChenEtAl_STFAR.bib',
                    // 'Project Page': '',
                    // 'Code': ''
                },
                paper_url: 'https://arxiv.org/pdf/2303.17937',                
            },
        ],

        2022: [
            {
                image: './imgs/2022_SuEtAl_TTAC.webp',
                title: 'Revisiting Realistic Test-Time Training: Sequential Inference and Adaptation by Anchored Clustering',
                author: '<b>Yongyi Su<equal></equal></b>, Xun Xu<equal></equal> and Kui Jia',
                publisher: 'Advances in Neural Information Processing Systems (<b>NeurIPS</b>), 2022',
                keywords: ['Test-Time Training', 'Anchored Clustering', 'Feature Alignment'],
                options: {
                    'PDF': 'https://arxiv.org/abs/2206.02721',
                    'Bibtex': './bibtexs/2022_SuEtAl_TTAC.bib',
                    'Project Page': './ProjectPage/2022_SuEtAl_TTAC',
                    'Code': 'https://github.com/Gorilla-Lab-SCUT/TTAC',
                    'Poster': './posters/2022_SuEtAl_TTAC.pdf'
                },
                paper_url: 'https://arxiv.org/pdf/2206.02721',                
            }
        ]
    },

    co_authors: {
        'Kui Jia': {
            image: './imgs/co-authors/JiaKui.jpeg',
            institute: 'The Chinese University of Hong Kong, Shenzhen',
            position: 'Professor',
            url: 'http://kuijia.site/',
            relationship: 'Teacher'
        },
        'Xun Xu': {
            image: './imgs/co-authors/XuXun.jpeg',
            institute: 'Institute for Infocomm Research, A*STAR',
            position: 'Senior Scientist',
            url: 'https://alex-xun-xu.github.io/',
            relationship: 'Teacher'
        },

        'Nanqing Liu': {
            image: './imgs/co-authors/NanqingLiu.png',
            institute: 'Southwest Jiaotong University, Chengdu',
            position: 'PhD Student',
            url: 'https://scholar.google.com/citations?user=x3dCJrAAAAAJ'
        },

        'Peiliang Gong': {
            image: './imgs/co-authors/PeiliangGong.jpg',
            institute: 'Nanjing University of Aeronautics and Astronautics, Nanjing',
            position: 'PhD Student',
            url: 'https://scholar.google.com/citations?user=0AQhhVQAAAAJ'
        },

        'Chengxin Liu': {
            image: './imgs/co-authors/ChengxinLiu.jpg',
            institute: 'Huazhong University of Science and Technology, Wuhan',
            position: 'PhD Student',
            url: 'https://cxliu0.github.io/'
        },

        'Yushu Li': {
            image: './imgs/co-authors/yushu.jpeg',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
            url: 'https://yushu-li.github.io/'
        },
        'Haojie Zhang': {
            image: './imgs/co-authors/HaojieZhang.jpeg',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
            url: 'https://zhang-haojie.github.io'
        },
        'Yijin Chen': {
            image: './imgs/co-authors/YijinChen.jpg',
            institute: 'South China University of Technology, Guangzhou',
            position: 'Master Student',
        },
    },

    analysis_globe_id: 'ZDtaUoW728eYUFp5JX7le2e2P1sZJLUg9RrVZQf7j5g'
}