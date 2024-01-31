'use client'

import { onPublishMsgFromEb } from '@/_backend/lib/api/src/graphql/subscriptions'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { generateClient } from 'aws-amplify/api'
import { useEffect, useState } from 'react'

const client = generateClient()
function Home() {
	const [homeScore, setHomeScore] = useState<number>(0)
	const [awayScore, setAwayScore] = useState<number>(0)
	const [message, setMessage] = useState<string>('')
	useEffect(() => {
		client
			.graphql({
				query: onPublishMsgFromEb,
			})
			.subscribe({
				next: ({ data }) => {
					console.log(data.onPublishMsgFromEb)
					setMessage(data.onPublishMsgFromEb.currentMessage)
					setHomeScore(data.onPublishMsgFromEb.homeTeamScore)
					setAwayScore(data.onPublishMsgFromEb.awayTeamScore)
				},
				error: (error) => console.warn(error),
			})
	}, [])

	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Home Score: {homeScore} </h1>
						<h1 className="text-5xl font-bold">Away Score: {awayScore}</h1>
						<p className="py-6">
							<span className="font-bold">Broadcaster Message: {message}</span>
						</p>
						<button className="btn btn-primary">Checkout Repo</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default withAuthenticator(Home, { signUpAttributes: ['email'] })
