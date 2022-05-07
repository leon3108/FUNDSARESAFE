import React from "react";
import Page from "../layout/Page";
import { WalletContext } from "../context/Wallet";
import { useContext } from "react";
import FormField from "../project/FormField";
import Select from 'react-select';


export default function Create() {
    const { account } = useContext(WalletContext);
    console.log("adresse = ", account);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    if (account) {
        return (
            <Page>
                Form to create a crowfunding<br /><br />
                <form >
                    <FormField type="text" name="Name" width="162%" title=" Project name :" display="inline-block" /><br />
                    <FormField type="text" name="Name" width="162%" title=" Description :" display="inline-block" /><br />
                    <FormField type="number" name="Name" width="100%" title="Goal :" display="inline-block" />
                    <FormField type="text" name="Name" width="100%" title="token :" display="inline-block" marginLeft="2%" /> <br />
                    <input class="button-64" type="file" style={{ marginBottom: "1.5%" }} />

                    <Select options={options} style={{color: "white"}}
                        theme={(theme) => {
                            console.log(theme.colors) 
                            return ({
                                ...theme,
                                borderRadius: 6,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#4ec1f7",
                                    primary: "#008770",
                                    neutral0:"#16161c",
                                }
                            })
                        }} />

                    <br /><button type="submit">Create my Project</button>
                </form>
            </Page>
        )
    } else {
        console.log("not connected");
        return (
            <Page>
                Connect you to create a project
            </Page>
        )
    }
}