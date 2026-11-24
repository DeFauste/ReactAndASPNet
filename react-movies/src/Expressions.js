export default function Expressions() {
    const subtext = 'This is my subtext';
    const reactLogoURL = 'https://raw.githubusercontent.com/MartsTech/reddit-clone/main/images/logo.png';
    const dublicate = (value: number) => value * 2
    return (
        <>
            <h1>Expressions example</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h3>The double 3 = {dublicate(3)}</h3>
            <img src={reactLogoURL} alt="react logo" width={200} height={200}/>
        </>
    )
}