import {LightningElement, track} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

const columns = [{
        type: "button",
        fixedWidth: 80,
        typeAttributes: {
            label: 'View',
            name: 'View',
            title: 'View',
            disabled: false,
            value: 'view',
            iconPosition: 'left',
            variant: 'success'
        },
        cellAttributes: {
            alignment: 'center'
        }
    },
    {
        type: "button-icon",
        fixedWidth: 80,
        typeAttributes: {
            label: 'Preview',
            name: 'Preview',
            title: 'Preview',
            iconPosition: 'left',
            variant: 'bare',
            iconName: 'action:preview',
        },
        cellAttributes: {
            alignment: 'center'
        }
    },
    {
        label: 'Name',
        fieldName: 'name',
        type: 'text',
        cellAttributes: {
            alignment: 'right'
        }
    },
    {
        label: 'Active',
        fieldName: 'active',
        type: 'text',
        cellAttributes: {
            iconName: {
                fieldName: 'activeIcon'
            },
            iconPosition: 'right',
            alignment: 'center'
        }
    },
    {
        label: 'Blood Group',
        fieldName: 'bloodGroup',
        type: 'text',
        cellAttributes: {
            class: {
                fieldName: 'bloodGrpClass'
            },
            alignment: 'right'
        }
    },
    {
        label: 'Annual Revenue',
        fieldName: 'revenue',
        type: 'number',
        cellAttributes: {
            class: {
                fieldName: 'numberClass'
            },
            alignment: 'right'
        }
    },
    {
        label: 'Due Date',
        fieldName: 'dob',
        type: "date-local",
        typeAttributes: {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit"
        },
        cellAttributes: {
            alignment: 'right'
        }
    },
    {
        label: '# of Employees',
        fieldName: 'employees',
        type: 'number',
        cellAttributes: {
            class: {
                fieldName: 'employeeClass'
            }
        }
    },
    {
        label: 'Website',
        fieldName: 'website',
        type: 'url',
        typeAttributes: {
            tooltip: {
                fieldName: 'website'
            },
            alignment: 'right'
        }
    },
];


export default class DataTableWithCustomStyle extends NavigationMixin(LightningElement) {
    @track data = [];
    @track columns = columns;
    recordPageUrl;

    connectedCallback() {    
        const data = [];
        data.push({
            name: 'Lavan',
            active: '',
            activeIcon: 'action:check',
            bloodGroup: 'AB+',
            bloodGrpClass: 'slds-icon-custom-custom45',
            revenue: '4254255',
            numberClass: 'slds-text-color_success',
            dob: new Date(),
            employees: '1000',
            employeeClass: 'slds-badge slds-theme_success slds-m-top_xxx-small slds-m-right_xxx-small',
            website: 'www.ceptes.com'
        }, {
            name: 'Kelly',
            active: '',
            activeIcon: 'action:reject',
            bloodGroup: 'A+',
            bloodGrpClass: 'slds-icon-custom-custom9',
            revenue: '43200',
            numberClass: 'slds-text-color_error',
            dob: new Date().getTime() + (5 * 24 * 60 * 60 * 1000),
            employees: '50',
            employeeClass: 'slds-badge slds-theme_error slds-m-top_xxx-small slds-m-right_xxx-small',
            website: 'www.ceptes.com'
        }, {
            name: 'Jeff',
            active: '',
            activeIcon: 'action:check',
            bloodGroup: 'B+',
            bloodGrpClass: 'slds-icon-custom-custom70',
            revenue: '6500',
            numberClass: 'slds-text-color_error',
            dob: new Date().getTime() + (10 * 24 * 60 * 60 * 1000),
            employees: '300',
            employeeClass: 'slds-badge slds-theme_warning slds-m-top_xxx-small slds-m-right_xxx-small',
            website: 'www.ceptes.com'
        }, {
            name: 'Thomas',
            active: '',
            activeIcon: 'action:reject',
            bloodGroup: 'AB+',
            bloodGrpClass: 'slds-icon-custom-custom45',
            revenue: '78000000',
            numberClass: 'slds-text-color_success',
            dob: new Date().getTime() + (30 * 24 * 60 * 60 * 1000),
            employees: '14000',
            employeeClass: 'slds-badge slds-theme_success slds-m-top_xxx-small slds-m-right_xxx-small',
            website: 'www.ceptes.com'
        });
        this.data = data;
    }

    callRowAction(event) {
        const name = event.detail.row.name;
        const actionName = event.detail.action.name;
        console.log('---name----' + name);
        console.log('---actionName----' + actionName);
        if (actionName === 'View') {
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    apiName: 'LWC'

                },
                state: {
                    c__name: name
                }
            });
        } else if (actionName === 'Preview') {
            this[NavigationMixin.GenerateUrl]({
                type: 'standard__navItemPage',
                attributes: {
                    apiName: 'LWC'

                },
                state: {
                    c__name: name
                }
            }).then(url => {
                window.open(url);
            });
        }
    }
}