export interface Account {
    attrs: {
        accountName: string;
        avatar: string;
        domain: string;
        email: string;
        name: string;
        uuid: string;
    };
    vaults: Vault[];
}

export interface Vault {
    attrs: {
        avatar: string;
        desc: string;
        name: string;
        type: string;
        uuid: string;
    };
    items: Item[];
}

export interface Item {
    categoryUuid: string;
    createdAt: number;
    favIndex: number;
    state: string;
    updatedAt: number;
    uuid: string;
    details: ItemDetails;
    overview: ItemOverview;
}

export interface ItemOverview {
    subtitle: string;
    title: string;
    url: string;
    urls: {
        label: string;
        url: string;
    }[];
}

export interface ItemDetails {
    loginFields: {
        value: string;
        id: string;
        name: string;
        fieldType: string;
        designation: string;
    }[];
}
