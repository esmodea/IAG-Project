const articles = [
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (3)",
                id: '3-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/24/21'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 1
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (1)",
                id: '1-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fgrumpy-granny-in-kitchen-with-gun-picture-id471777273&f=1&nofb=1&ipt=003dbab5e7057c0a4199649dfd0f3cc06f6784680125b14ac003653cf44895ed&ipo=images',
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 2
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (3)",
                id: '3-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/03/23'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 3
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (2)",
                id: '2-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fold-woman-with-pistol-picture-id484719873&f=1&nofb=1&ipt=9a69fd134d2951be0ebc35f80d193cbbf49775773fba4cb1f406cfd9db9824c6&ipo=images",
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 4
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (1)",
                id: '1-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 5 
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (3)",
                id: '3-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/24/21'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 6
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (1)",
                id: '1-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fgrumpy-granny-in-kitchen-with-gun-picture-id471777273&f=1&nofb=1&ipt=003dbab5e7057c0a4199649dfd0f3cc06f6784680125b14ac003653cf44895ed&ipo=images',
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 7
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (3)",
                id: '3-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/03/23'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 8
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (2)",
                id: '2-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fold-woman-with-pistol-picture-id484719873&f=1&nofb=1&ipt=9a69fd134d2951be0ebc35f80d193cbbf49775773fba4cb1f406cfd9db9824c6&ipo=images",
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 9
    },
    {
        content: {
            info: {
                icon: '',
                author: "Author Name (1)",
                id: '1-Author-Name',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                headline: 'This is a headline for important',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.',
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 10 
    },
    {
        content: {
            info: {
                icon: '',
                author: "Jane Whimsey",
                id: 'jane-whimsey',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                headline: 'The Crimes of Dondald Trump by Jane Whimsey #1 New York v Donald John Trump',
                text: `It really doesn’t get more tawdry than this. A rich man behaving badly, using his money and connections to hide is sleazy deeds, directing and taking part in an illegal scheme to cover it all up. New York has all the proof, and it paints a disgusting picture of a Donald Trump, who obviously feels he should never face the consequences for his many bad actions. br/
                On March 30th 2023 D.A. Alvin Bragg announced the indictment of Donald John Trump on 34 counts of falsifying records with the intent to defraud the people of the state of New York while committing another crime. br/
                Donald didn’t want people to know that he cheats on his wives, a lot. Then candidate Trump needed to hide the fact that he had a child out of wedlock, had a sexual relationship with a playmate, and fucked a porn star. It is the sort of information that could have sunk his hopes of the Presidency. br/                
                To solve this problem, Trump paid a ton hush money, so that the public would not know about his serial infidelity before they voted. Then he covered up the payments by committing fraud, 34 times. br/
                Since payments like this are considered a campaign contribution, it must by law, be openly claimed and reported. However, Trump could not to admit to making the payments, which were in violation of election law, because of the huge amounts paid. In the end this is the convoluted story of an irresponsible man doing crimes for the benefit of himself, the story of justice deserved!`,
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 11
    },
    {
        content: {
            info: {
                icon: '',
                author: "Marvin Rider",
                id: 'marvin-rider',
                links: ['www.google.com', 'www.bing.com'],
                date: '11/05/23'
            },
            article: {
                headline: 'Tommy Tuberville might be a Duck by M. Rider',
                text: `Tommy Tuberville has been on a personal campaign to force the military to bend to his will. Until a bipartisan group finally coalesced to stop him, the old football coach refused to allow any promotions to go through committee because he does not like the abortion policy of the armed forces. A great deal has been said in the news about Tuberville’s low IQ and how holding up promotions harms not only morale, but actual military readiness. br/
                I think we should see beyond his flagrant stupidity and take a close look at Tuberville’s loyalty to the country. Harming the military’s ability to face global threats sounds downright unamerican. I have a name for people who intentionally weaken our nation’s military to face worldwide threats. So, if Senator Tommy walks like a duck, and quacks like a duck, he is probably a traitor.`,
            },
            interaction: {
                likes: '14k'
            }
        },
        key: 11
    },
]

export default articles;