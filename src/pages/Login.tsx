import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export default function Login(){
    const doLogin = (e:React.FormEvent) => {
        e.preventDefault()
    }
    return(
        <IonPage>
            <IonHeader >
                <IonToolbar color={"success"}>
                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color={"dark"}>
                <IonCard>
                    <IonCardContent >
                        <form  onSubmit={doLogin} style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                            <IonInput fill="outline" placeholder="Digite seu email" type="email" label="Email" labelPlacement="floating"></IonInput>
                            <IonInput fill="outline" placeholder="Digite sua senha" type="password" label="Senha" labelPlacement="floating"></IonInput>
                            <IonButton color={"primary"} type={"submit"} expand="block">Login</IonButton>
                            <IonButton routerLink={"/register"} color={"tertiary"}  expand="block">Create Account</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            {/* <IonFooter>
                <IonToolbar>Asd</IonToolbar>
            </IonFooter> */}
        </IonPage>
    )
}