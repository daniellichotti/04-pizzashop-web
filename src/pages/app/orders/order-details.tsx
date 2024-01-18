import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

import { DialogContent, DialogHeader } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// export interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: oasjikdjoiajs</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                  Pendente
                </span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">Daniel Coelho</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">(12) 31209981</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">email</TableCell>
            <TableCell className="flex justify-end">daniel@gmail.com</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado ha
            </TableCell>
            <TableCell className="flex justify-end">3 minutos</TableCell>
          </TableRow>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preco</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCell>Pizza Pepperoni Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 69.90</TableCell>
            <TableCell className="text-right">R$ 139.80</TableCell>
          </TableBody>
          <TableBody>
            <TableCell>Pizza Mussarela Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 59.90</TableCell>
            <TableCell className="text-right">R$ 119.80</TableCell>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 259.60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
