const licenseOptions = [
    "All Rights Reserved", 
    "CC BY",
    "CC BY-SA",
    "CC BY-NC",
    "CC BY-ND",
    "CC BY-NC-SA",
    "CC BY-NC-ND",
    "CC0"
];  

const questions = {
    canLicense: {
        value : null, 
        question: "Are you the owner of the material or do you have permission from the owner(s) of the material to license the work?",
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 1,
    },
    knowLicense: {
        value : null, 
        question: "Do you know which license you need?",
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 2,
    },
    shareWork: {
        value : null, 
        question: "Can others share the work?",
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 3,
    },
    attribution: {
        value : null, 
        question: "Do you want attribution?", 
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 4,
    },
    commercialUse: {
        value : null, 
        question: "Is commercial use allowed?",
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 5,
    },
    modificationAllowed: {
        value : null, 
        question: "Is modification allowed?", 
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 6,
    },
    identicalTerms: {
        value : null, 
        question: "Use identical terms?", 
        description: "",
        options: [
            {value: true, name: "Yes"},
            {value: false, name: "No"},
        ],
        step: 7
    }
};

const text = {
    license_text_1:     
        "Unless there are restrictions (see below), \
        your material will be uploaded in the L4L with \
        the following Creative Commons License:",
    license_text_2:
        "The material you upload in the Library for Learning \
        (L4L) will be visible and may be shared and adapted by \
        other WUR employees. Non-WUR viewers are able to read \
        the description of the material, but are not able to \
        access the material.",
    license_text_3:
        "If you want to share your material completely open to \
        all viewers, please indicate this below. ",
    license_text_4: 
        "Restrictions: You cannot use this license if the work \
        is commissioned by other parties and those parties have \
        defined specific copyright agreements. You also cannot \
        use this license if you have built upon work with a Creative \
        Commons license for which other ‘Share Alike’ SA conditions \
        have been set. For instance work with a CC BY-SA license. \
        Please contact us to provide your work with the correct license.",
    cc_by_nc_sa_description: 
        "This license allows others to copy, distribute, \
        remix, transform and build upon the material in any \
        medium or format as long as they give appropriate \
        credit to the creators. Modified material based on \
        this work must be licensed under identical terms \
        (i.e. the same license). Others may not use the work \
        for commercial purposes. "
};

const images = {
    cc_by_nc_sa: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg",
    cc_by_nc_nd: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-nd.svg",
    by : "https://mirrors.creativecommons.org/presskit/icons/by.svg",
    nc : "https://mirrors.creativecommons.org/presskit/icons/nc.svg",
    sa : "https://mirrors.creativecommons.org/presskit/icons/sa.svg",
    nd : "https://mirrors.creativecommons.org/presskit/icons/nd.svg"
};

module.exports={
    licenseOptions,
    questions,
    text,
    images
};