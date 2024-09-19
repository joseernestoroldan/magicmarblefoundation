'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCardIcon, DollarSignIcon, UserIcon } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function DonationForm() {
  const [stage, setStage] = useState(1)
  const [formData, setFormData] = useState({
    amount: '',
    firstName: '',
    secondName: '',
    country: '',
    address: '',
    telephone: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    isRecurring: false
  })

  const predefinedAmounts = ['10', '25', '50', '100']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleAmountChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, amount: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prevData => ({ ...prevData, isRecurring: checked }))
  }

  const handleNext = () => {
    setStage(prevStage => prevStage + 1)
  }

  const handleBack = () => {
    setStage(prevStage => prevStage - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server or payment processor
  }

  const AmountStage = () => (
    <>
      <CardHeader>
        <CardTitle>Donation Amount</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountChange(amount)}
              className={`h-20 flex items-center justify-center text-lg font-semibold rounded-lg transition-colors ${
                formData.amount === amount
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              aria-pressed={formData.amount === amount}
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <Label htmlFor="customAmount">Custom amount</Label>
          <Input
            id="customAmount"
            name="amount"
            type="number"
            placeholder="Enter custom amount"
            value={predefinedAmounts.includes(formData.amount) ? '' : formData.amount}
            onChange={handleInputChange}
            className="text-lg"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} className="w-full" disabled={!formData.amount}>
          Next
        </Button>
      </CardFooter>
    </>
  )

  const PersonalDetailsStage = () => (
    <>
      <CardHeader>
        <CardTitle>Personal Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondName">Second Name</Label>
            <Input
              id="secondName"
              name="secondName"
              placeholder="Doe"
              value={formData.secondName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select name="country" onValueChange={handleSelectChange('country')}>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="123 Main St, City, State, ZIP"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">Telephone Number</Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.telephone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleBack} variant="outline">Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </CardFooter>
    </>
  )

  const PaymentStage = () => (
    <>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="recurring-donation" className="text-base">
            {formData.isRecurring ? 'Monthly Sponsorship' : 'One-time Donation'}
          </Label>
          <Switch
            id="recurring-donation"
            checked={formData.isRecurring}
            onCheckedChange={handleSwitchChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleBack} variant="outline">Back</Button>
        <Button onClick={handleSubmit}>
          {formData.isRecurring ? 'Start Sponsorship' : 'Donate'} ${formData.amount}
          {formData.isRecurring ? '/month' : ''}
        </Button>
      </CardFooter>
    </>
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <div className="flex justify-center mb-4 pt-6">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 1 ? 'bg-primary text-primary-foreground' : 'bg-gray-200'}`}>
              <DollarSignIcon className="h-6 w-6" />
            </div>
            <div className={`w-16 h-1 ${stage >= 2 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 2 ? 'bg-primary text-primary-foreground' : 'bg-gray-200'}`}>
              <UserIcon className="h-6 w-6" />
            </div>
            <div className={`w-16 h-1 ${stage >= 3 ? 'bg-primary' : 'bg-gray-200'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stage >= 3 ? 'bg-primary text-primary-foreground' : 'bg-gray-200'}`}>
              <CreditCardIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
        {stage === 1 && <AmountStage />}
        {stage === 2 && <PersonalDetailsStage />}
        {stage === 3 && <PaymentStage />}
      </Card>
    </div>
  )
}