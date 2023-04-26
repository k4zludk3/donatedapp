import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { doLogin } from '@/services/Web3Services';

export default function Home() {

  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  function btnLoginClick() {
    doLogin()
      .then(wallet => setWallet(wallet))
      .catch(err => setError(err.message));
  }

  return (
    <>
      <Head>
        <title>Donate Crypto | Index</title>
        <meta charSet='utf-8' />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center py-5 g-5">
          {
            !wallet
              ? (
                <div className="col-10 col-sm-8 col-lg-6">
                  <img src="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
                </div>
              )
              : (
                <div className="col-10 col-sm-8 col-lg-6">
                  <p className='mb-3'>Seja bem vindo {wallet}</p>
                  <p className='mb-3'>O que você deseja fazer?</p>
                  <div className='col-12'>
                    <p><Link href="/donate" className='btn btn-primary col-6 p-3'>Quero fazer uma doação</Link></p>
                    <p><Link href="/create" className='btn btn-secondary col-6 p-3'>Quero criar uma campanha</Link></p>
                  </div>
                </div>
              )
          }

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donate Crypto</h1>
            <p className='lead'>Sua plataforma descentralizada de doações.</p>
            <p className='lead mb-3'>Autentique-se com sua carteira, crie sua campanha ou doe para campanhas existentes.</p>
            {
              !wallet
                ? (
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type='button' className='btn btn-primary btn-lg px-4 me-md-2' onClick={btnLoginClick}>
                      <img src="/metamask.svg" width="64" className="me-3" />
                      Conectar com a MetaMask
                    </button>
                    {
                      error
                        ? <div className="alert alert-danger p-3 col-6" role="alert">{error}</div>
                        : <></>
                    }
                  </div>
                )
                : <></>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
