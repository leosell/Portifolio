import { useState } from "react"
import Swal from "sweetalert2"
import api from "../../api"


const Contact = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ comments, setComments ] = useState('')

    const submit_contact = async () => {
        try {
            const authData = await api.post('/contact', {
                name: name,
                email: email,
                telephone: telephone,
                comments: comments
            })

            if (authData.status === 200) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'E-mail enviado',
                    text: 'Seu e-mail foi enviado para Leonardo Sell, assim que possivel ele irá responder o seu e-mail',
                    showConfirmButton: false,
                    timer: 3000
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'warning'
                })
            }
        } catch (error) {
            console.log(`Erro - ${error}`)
        }
    }

    return (
        <main className="fixed w-screen h-tamanho-main">
            <div className="flex flex-col text-center m-auto w-2/6 gap-3 py-44">
                <h1 className="text-7xl">
                    Contact
                </h1>
                <h3 className="text-sm pb-6">
                    <i>Preencha os campos para conversar melhor sobre projetos ou se quiser me contratar!!</i>
                </h3>
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="rounded border px-4 text-black outline-none h-10 placeholder:text-black hover:border-sky-500 hover:ring-2 focus:ring-2 focus:ring-sky-500"
                />
                <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email_contact"
                    type="email"
                    placeholder="Email"
                    className="rounded border px-4 text-black outline-none h-10 placeholder:text-black hover:border-sky-500 hover:ring-2 focus:ring-2 focus:ring-sky-500"
                />
                <input
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    id="tel_contact"
                    type="tel"
                    placeholder="Contact Phone"
                    className="rounded border px-4 text-black outline-none h-10 placeholder:text-black hover:border-sky-500 hover:ring-2 focus:ring-2 focus:ring-sky-500"
                />
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    id="comments_contact"
                    placeholder="Comments"
                    rows="4"
                    cols="20"
                    className="rounded border px-4 text-black outline-none placeholder:text-black hover:border-sky-500 hover:ring-2 focus:ring-2 focus:ring-sky-500"
                />
                <input
                    onClick={submit_contact}
                    type='button'
                    value="Submit"
                    className="text-black font-medium bg-cyan-400 rounded h-10 cursor-pointer hover:bg-cyan-600/50 hover:font-bold hover:text-white"
                />
            </div>
        </main>
    )
}

export default Contact


