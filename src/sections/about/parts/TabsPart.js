import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Habilidades
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Serviços
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress value={100} text="Desenvolvimento Web" />
                        <Progress value={70} text="React" />
                        <Progress value={100} text="Segurança e Compliance" />
                        <Progress value={80} text="Gatsby" />
                        <Progress value={90} text="Hospedagem e otimização" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "Marketing" :  {
                                    title: "Sem estratégia sua empresa não vende",
                                    institution: "Somos especialistas",
                                    description: `Seu site pode até ser bonito e suas redes sociais “bombarem”, mas sem estratégia, sua empresa não vende e VOCÊ se frustra.
                                    Somos estrategistas especialistas em Sites, Landing Pages, Google ADS, Facebook ADS, SEO, Funil de vendas, Gestão de redes sociais e Assessoria Comercial.`
                                },
                                "Segurança" : {
                                    title: "50 milhões de reais!",
                                    institution: "Essa é a multa que sua empresa pode receber",
                                    description: `Caso não se enquadre às normas de segurança da informação.
                                    Nosso corpo jurídico é especialista em LGPD, Marco Civil, entre outros. Além disso, podemos ajudar VOCÊ a implantar outros meios de segurança ao seu negócio através da assinatura e aceite digital.`
                                },
                                "Otimização" : {
                                    title: "Seu site está lento?",
                                    institution: "Você não está só nessa situação",
                                    description: " O seu cliente não tem paciência em navegar na sua loja virtual devido a lentidão? Segundo uma pesquisa das Amazon, existe uma explicação científica que explica esse efeito e a melhor notícia é que nós sabemos como te ajudar."
                                },
                                "Desenvolvimento" : {
                                    title: "Sites ultrarápidos",
                                    institution: "Nós sabemos fazer!",
                                    description: `Se você está procurando desenvolvimento de sites, App´s, CRM, ERP ou qualquer outra tecnologia, nós podemos ajudar você.`
                                }
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart